import React, { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const VideoPlayer = forwardRef(({ src, BoxProps, ...props }, ref) => {
    return (
        <Box {...BoxProps} ref={ref}>
            <video src={src} autoPlay loop muted playsInline width="100%" height="auto" {...props} />
        </Box>
    );
});

VideoPlayer.displayName = 'VideoPlayer';
VideoPlayer.propTypes = {
    src: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    BoxProps: PropTypes.object
};

export default VideoPlayer;