import "./container.css";
const Container = ({
    children,
    title,
}: {
    children: JSX.Element | JSX.Element[];
    title: string;
})=>{
    return(
        <div id="styled">
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
    );
};

export default Container;