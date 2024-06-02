
import ScrollToTop from 'react-scroll-to-top';

const SmoothScroll = () => {
    return (


        <ScrollToTop
            smooth
            top={300}
            style={{
                position: 'sticky',
                bottom: '20px',
                left: '0',
                right: '0',
                margin: 'auto',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer'
            }}
        />

    );
};

export default SmoothScroll;