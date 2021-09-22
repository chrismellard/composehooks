interface MyButtonProps {
    onClickHandler: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({onClickHandler, children}) => {
    return (
        <div>
            <button onClick={onClickHandler}>{children}</button>
        </div>
    );
}

export default MyButton
