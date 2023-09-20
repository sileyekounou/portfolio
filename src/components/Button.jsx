const Button = ({name, dimension}) => {
    return (
        <>
            <button className=" border border-solid border-[#4F4F4F] duration-150 hover:border-[#2F80ED] hover:text-[#2F80ED] focus:text-white focus:bg-[#2F80ED]  focus:border-none " style={dimension} >{name}</button>
        </>
    );
}

export default Button