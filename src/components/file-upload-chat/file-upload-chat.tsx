import * as React from 'react';
import { Button } from '../button/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../tooltip/tooltip';
import { cn } from '@/lib/utils';
import {
  Upload,
  X,
  FileText,
  Image,
  FileX,
  Send,
  Paperclip,
} from 'lucide-react';

export interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  file: File;
}

export interface FileUploadChatProps {
  onFilesUploaded?: (files: UploadedFile[]) => void;
  onFileRemoved?: (fileId: string) => void;
  onSendMessage?: (message: string, files: UploadedFile[]) => void;
  placeholder?: string;
  maxFiles?: number;
  acceptedFileTypes?: string;
  className?: string;
}

function FileUploadChat({
  onFilesUploaded,
  onFileRemoved,
  onSendMessage,
  placeholder = 'Type your message...',
  maxFiles = 5,
  acceptedFileTypes = '.pdf, .doc, .docx, .txt, .jpg, .jpeg, .png, .gif, .svg',
  className,
  ...props
}: FileUploadChatProps) {
  const [message, setMessage] = React.useState('');
  const [files, setFiles] = React.useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) {
      return <Image className="size-4" />;
    }
    if (
      fileType.includes('pdf') ||
      fileType.includes('document') ||
      fileType.includes('text')
    ) {
      return <FileText className="size-4" />;
    }
    return <FileX className="size-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const truncateFileName = (name: string, maxLength = 20) => {
    if (name.length <= maxLength) return name;
    const ext = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    const truncated =
      nameWithoutExt.substring(0, maxLength - ext!.length - 4) + '...';
    return truncated + '.' + ext;
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = [];

    for (
      let i = 0;
      i < selectedFiles.length && files.length + newFiles.length < maxFiles;
      i++
    ) {
      const file = selectedFiles[i];
      const uploadedFile: UploadedFile = {
        id: `${Date.now()}-${i}`,
        name: file.name,
        type: file.type,
        size: file.size,
        file,
      };
      newFiles.push(uploadedFile);
    }

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onFilesUploaded?.(updatedFiles);
  };

  const handleFileRemove = (fileId: string) => {
    const updatedFiles = files.filter(f => f.id !== fileId);
    setFiles(updatedFiles);
    onFileRemoved?.(fileId);
  };

  const handleSend = () => {
    if (message.trim() || files.length > 0) {
      onSendMessage?.(message, files);
      setMessage('');
      setFiles([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  return (
    <TooltipProvider>
      <div
        className={cn(
          'bg-background relative w-full max-w-4xl rounded-2xl border shadow-sm transition-all',
          isDragOver && 'border-primary/50 bg-primary/5',
          className
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        {...props}
      >
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 p-4 pb-2">
            {files.map(file => (
              <div
                key={file.id}
                className="bg-muted/50 flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
              >
                {getFileIcon(file.type)}
                <span className="text-foreground font-medium">
                  {truncateFileName(file.name)}
                </span>
                <span className="text-muted-foreground text-xs">
                  ({formatFileSize(file.size)})
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-destructive/10 hover:text-destructive size-4"
                  onClick={() => handleFileRemove(file.id)}
                >
                  <X className="size-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2 p-4">
          <div className="relative min-w-200 flex-1">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="placeholder:text-muted-foreground max-h-32 min-h-[24px] w-full resize-none border-0 bg-transparent py-0 text-sm leading-relaxed outline-none"
              rows={1}
            />
          </div>

          <div className="flex w-full items-center justify-between gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={files.length >= maxFiles}
                  className="hover:bg-muted/50"
                >
                  <Paperclip />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upload file</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!message.trim() && files.length === 0}
                  className="px-4"
                >
                  <Send />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFileTypes}
          onChange={e => handleFileSelect(e.target.files)}
          className="hidden"
        />

        {isDragOver && (
          <div className="bg-primary/5 border-primary/50 absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-dashed">
            <div className="text-center">
              <Upload className="text-primary mx-auto mb-2 size-8" />
              <p className="text-primary text-sm font-medium">
                Drop files here to upload
              </p>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}

export { FileUploadChat };
