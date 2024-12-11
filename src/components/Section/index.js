function Section({ id, children, style }) {
    return (
        <div id={id} style={style}>
            {children}
        </div>
    );
}
export default Section;
