import useWindowResize from './useWindowResize'

const WindowResize = () => {

    useWindowResize((width) => {
        console.log(width)
    })

    return (
        <div>
            UseWindowResize
        </div>
    );
};

export default WindowResize;