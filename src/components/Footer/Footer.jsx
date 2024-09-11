import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    IconButton,
    SimpleGrid,
    Stack,
    chakra,
    useColorMode,
} from '@chakra-ui/react'
import Typography from '../Typography/Typography.jsx';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const internalLinks = [
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: 'https://www.futurehouse.org', target: '_blank' },
            { label: 'Careers', href: 'https://job-boards.greenhouse.io/futurehouse', target: '_blank' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Terms of Service', href: 'https://www.futurehouse.org/terms-of-service', target: '_blank' },
            { label: 'Privacy Policy', href: 'https://www.futurehouse.org/privacy-policy', target: '_blank' },
        ],
    },
]

const Logo = (props) => (
    <a href="https://futurehouse.org" target="_blank" rel="noopener noreferrer" aria-label="FutureHouse Home">
        <chakra.svg
            id="FutureHouse_Logo"
            data-name="FutureHouse Logo"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 581.7301 86.014"
            height="8"
            width="auto"
            aria-labelledby="logoTitle logoDesc"
            {...props}
        >
            <title id="logoTitle">FutureHouse Logo</title>
            <desc id="logoDesc">The official logo of FutureHouse</desc>
            <g id="type">
                <path
                    id="type_PathItem_"
                    data-name="type <PathItem>"
                    d="m175.106,14.8683v7.6023h-29.9552v15.9279h27.0287v7.451h-27.0287v25.4308h-8.4769V14.8683h38.4322Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-2"
                    data-name="type <PathItem>"
                    d="m206.5413,53.4518v-23.0593h7.9219v40.8878h-7.6023v-6.1054c-3.0947,4.6758-7.3669,7.0473-12.8331,7.0473-8.8806,0-14.3469-5.2308-14.3469-14.4142v-27.4155h7.9219v26.3054c0,5.7018,2.8593,8.561,8.6451,8.561,5.4663,0,10.2934-4.1207,10.2934-11.8072Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-3"
                    data-name="type <PathItem>"
                    d="m242.8206,30.3925v6.4923h-8.2415v24.573c0,2.4556,1.2614,3.4816,4.6758,3.4816h3.5657v6.3409c-1.7492.1514-3.3302.2355-4.8271.2355-7.6023,0-11.3362-2.6911-11.3362-9.3515v-25.2794h-6.5764v-6.4923h6.5764v-11.7231h7.9219v11.7231h8.2415Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-4"
                    data-name="type <PathItem>"
                    d="m276.0388,53.4518v-23.0593h7.9219v40.8878h-7.6023v-6.1054c-3.0947,4.6758-7.3669,7.0473-12.8332,7.0473-8.8806,0-14.3469-5.2308-14.3469-14.4142v-27.4155h7.9219v26.3054c0,5.7018,2.8593,8.561,8.6451,8.561,5.4663,0,10.2934-4.1207,10.2934-11.8072Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-5"
                    data-name="type <PathItem>"
                    d="m313.2599,29.7702c.9587,0,1.7492,0,2.3042.0841v7.5351h-1.9847c-8.006,0-12.7659,4.0366-12.7659,11.7231v22.1847h-7.9219V30.4093h7.6023v7.2828c2.607-5.3149,6.8959-7.9219,12.7659-7.9219Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_CompoundPathItem_"
                    data-name="type <CompoundPathItem>"
                    d="m356.0651,51.1644v2.3042h-30.8298c.7064,8.1574,4.9953,12.1267,11.7231,12.1267,5.1467,0,8.561-2.3042,10.1421-6.8118h8.006c-2.1361,8.1574-8.7124,13.4723-18.2994,13.4723-5.87,0-10.613-1.9847-14.1787-5.8699-3.5657-3.8853-5.3822-9.032-5.3822-15.5242s1.8165-11.6558,5.3822-15.5242c3.5657-3.8853,8.2415-5.8699,14.0273-5.8699s10.7812,2.0688,14.2628,6.1054c3.4143,4.0366,5.1467,9.2674,5.1467,15.6083v-.0168Zm-19.4095-15.0533c-6.1054,0-10.3775,3.8012-11.3362,11.1008h22.5884c-.7064-6.5764-4.8271-11.1008-11.2521-11.1008Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-6"
                    data-name="type <PathItem>"
                    d="m400.67,38.3985V14.8683h8.4769v56.4288h-8.4769v-25.1281h-29.0806v25.1281h-8.4769V14.8683h8.4769v23.5302h29.0806Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_CompoundPathItem_-2"
                    data-name="type <CompoundPathItem>"
                    d="m451.4644,66.3691c-3.7171,3.8853-8.6452,5.8699-14.6665,5.8699s-10.9326-1.9847-14.6665-5.8699c-3.7171-3.8853-5.6345-9.032-5.6345-15.5242s1.9006-11.7231,5.6345-15.6083c3.7171-3.8853,8.6452-5.7858,14.6665-5.7858s10.9326,1.9006,14.6665,5.7858c3.7171,3.8853,5.5504,9.1161,5.5504,15.6083s-1.8165,11.6558-5.5504,15.5242Zm-14.6665-.9587c7.2827,0,11.9585-5.3822,11.9585-14.5824s-4.6758-14.5824-11.9585-14.5824-12.0426,5.3822-12.0426,14.5824,4.6758,14.5824,12.0426,14.5824Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-7"
                    data-name="type <PathItem>"
                    d="m489.7788,53.4518v-23.0593h7.9219v40.8878h-7.6023v-6.1054c-3.0947,4.6758-7.3669,7.0473-12.8332,7.0473-8.8806,0-14.3469-5.2308-14.3469-14.4142v-27.4155h7.9219v26.3054c0,5.7018,2.8593,8.561,8.6452,8.561,5.4663,0,10.2934-4.1207,10.2934-11.8072Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_PathItem_-8"
                    data-name="type <PathItem>"
                    d="m521.786,72.3231c-11.4035,0-17.3576-4.6758-17.9126-14.0273h7.9219c.6391,5.7018,3.4143,7.7705,10.058,7.7705,6.0213,0,9.032-1.9006,9.032-5.7018,0-3.2461-2.0688-4.8271-8.7124-6.0213l-4.2048-.7905c-8.6452-1.581-13.0014-5.6345-13.0014-12.2108,0-7.2828,5.8699-11.8913,15.7765-11.8913,11.2521,0,17.038,4.5917,17.2734,13.7077h-7.6864c-.3196-5.6345-3.4816-7.5351-9.587-7.5351-5.0794,0-7.9219,1.9847-7.9219,5.4663,0,3.2461,2.4556,4.7599,7.6023,5.7858l4.2721.7064c10.058,1.9006,14.1787,5.4663,14.1787,12.2108,0,7.9219-6.3409,12.5136-17.1221,12.5136l.0337.0168Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="type_CompoundPathItem_-3"
                    data-name="type <CompoundPathItem>"
                    d="m581.73,51.1644v2.3042h-30.8298c.7064,8.1574,4.9953,12.1267,11.7231,12.1267,5.1467,0,8.561-2.3042,10.1421-6.8118h8.006c-2.136,8.1574-8.7124,13.4723-18.2994,13.4723-5.8699,0-10.613-1.9847-14.1787-5.8699s-5.3822-9.032-5.3822-15.5242,1.8165-11.6558,5.3822-15.5242c3.5657-3.8853,8.2415-5.8699,14.0273-5.8699s10.7812,2.0688,14.2628,6.1054c3.4143,4.0366,5.1467,9.2674,5.1467,15.6083v-.0168Zm-19.4095-15.0533c-6.1054,0-10.3775,3.8012-11.3362,11.1008h22.5883c-.7064-6.5764-4.8271-11.1008-11.2521-11.1008Z"
                    style={{ strokeWidth: '0px' }}
                />
            </g>
            <g id="logoMark">
                <path
                    id="logoMark_PathItem_"
                    data-name="logoMark <PathItem>"
                    d="m86.014,36.9521v31.5194h-31.5026l17.5426,17.5426h31.5026v-31.5026s-17.5426-17.5594-17.5426-17.5594Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="logoMark_PathItem_-2"
                    data-name="logoMark <PathItem>"
                    d="m17.5426,36.9521v31.5194h31.5194l-17.5594,17.5426H0v-31.5026s17.5426-17.5594,17.5426-17.5594Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="logoMark_PathItem_-3"
                    data-name="logoMark <PathItem>"
                    d="m86.014,31.5026L54.5114,0h31.5026v31.5026Z"
                    style={{ strokeWidth: '0px' }}
                />
                <path
                    id="logoMark_PathItem_-4"
                    data-name="logoMark <PathItem>"
                    d="m49.0788,0l-31.5362,31.5026V0h31.5362Z"
                    style={{ strokeWidth: '0px' }}
                />
            </g>
        </chakra.svg>
    </a>
);

const Footer = ({ FooterProps, links = [], disclaimers = [], ...rest }) => {
    const linksToRender = [...links, ...internalLinks];
    const { colorMode } = useColorMode();

    return (
        <Box bg="bg.surface" {...rest}>
            <Box as="footer" role="contentinfo" width="100%" {...FooterProps}>
                <Stack
                    justify="space-between"
                    align="start"
                    direction={{ base: 'column', lg: 'row' }}
                    py={{ base: '3', md: '4' }}
                    spacing="8"
                >
                    <Stack spacing={{ base: '6', md: '8' }} align="start">
                        <Logo fill={colorMode === 'dark' ? 'white' : 'black'} />
                        {disclaimers.length > 0 && (
                            disclaimers.map((disclaimer, idx) => <Fragment key={idx}>{disclaimer}</Fragment>)
                        )}
                    </Stack>
                    <SimpleGrid columns={{ base: 2, md: Math.min(4, linksToRender.length) }} gap="8" width={{ base: 'full', lg: 'auto' }}>
                        {linksToRender.map((group, idx) => (
                            <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
                                <Typography fontSize="sm" fontWeight="semibold" color="fg.subtle">
                                    {group.title}
                                </Typography>
                                <Stack spacing="3" shouldWrapChildren>
                                    {group.links.map((link, idx) => (
                                        <Button
                                            key={idx}
                                            as="a"
                                            variant="text"
                                            colorScheme="gray"
                                            href={link.href ?? null}
                                            target={link.target ?? null}
                                            onClick={link.onClick ?? null}
                                            sx={{
                                                fontWeight: 'normal',
                                                border: 'none',
                                                fontStyle: 'normal',
                                                padding: 0,
                                                _hover: {
                                                    textDecoration: 'none',
                                                    fontWeight: 'bold'
                                                },
                                                _focus: {
                                                    textDecoration: 'none',
                                                    fontWeight: 'bold'
                                                },
                                                _active: {
                                                    textDecoration: 'none',
                                                    fontWeight: 'bold'
                                                }
                                            }}
                                            tabIndex={0}
                                        >
                                            {link.label}
                                        </Button>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Divider />
                <Stack
                    pt="8"
                    pb="12"
                    justify="space-between"
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align="center"
                >
                    <Typography fontSize="sm" color="fg.subtle">
                        &copy; {new Date().getFullYear()} FutureHouse, Inc. All rights reserved.
                    </Typography>
                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="https://www.linkedin.com/company/futurehouse?trk=public_post_feed-actor-name" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as="a" href="https://github.com/future-house/" aria-label="GitHub" target="_blank" icon={<FaGithub />} />
                        <IconButton as="a" href="https://x.com/futurehousesf" aria-label="X (formaly known as Twitter)" target="_blank" icon={<FaTwitter />} />
                    </ButtonGroup>
                </Stack>
            </Box>
        </Box>
    );
};

Footer.propTypes = {
    enableScrollToTop: PropTypes.bool,
    showCareerOpportunities: PropTypes.bool,
    FooterProps: PropTypes.object,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    href: PropTypes.string,
                    target: PropTypes.string,
                    onClick: PropTypes.func,
                })
            )
        })
    ),
    disclaimers: PropTypes.arrayOf(PropTypes.node),
};

export default Footer;
