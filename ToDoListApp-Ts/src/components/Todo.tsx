export const Todo: React.FC<props> = ({id,title,completed}) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => { }}                
            />
        <label >{title}</label>
        </div>
    );
}