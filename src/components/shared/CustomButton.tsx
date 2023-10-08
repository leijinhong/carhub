interface PropsType {
    children: any;
    containerStyles: string;
    btnType?: "button" | "submit" | "reset";
}

const CustomButton = (props: PropsType) => {
    return (
        <button
            disabled={false}
            type={props.btnType || "button"}
            className={`custom-btn   ${props.containerStyles}`}
            onClick={() => {
                console.log(123);
            }}>
            <span className="flex-1">{props.children || "title"}</span>
        </button>
    );
};
export default CustomButton;
