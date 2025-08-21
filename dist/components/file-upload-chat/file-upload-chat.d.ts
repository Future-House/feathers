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
declare function FileUploadChat({ onFilesUploaded, onFileRemoved, onSendMessage, placeholder, maxFiles, acceptedFileTypes, className, ...props }: FileUploadChatProps): import("react/jsx-runtime").JSX.Element;
export { FileUploadChat };
//# sourceMappingURL=file-upload-chat.d.ts.map