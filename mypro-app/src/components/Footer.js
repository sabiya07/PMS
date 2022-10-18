function Footer({content}){
    console.log(content);
    return(
        <>
<div className="Footer">
    <h1>
        Evaluate.work.improve
    </h1>
    <p>Your result your way{content}</p>
</div>

        </>
    )
}
export default Footer;

