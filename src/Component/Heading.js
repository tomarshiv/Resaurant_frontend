export default function heading ({title}){
    return(
        <div style={{ fontFamily:'kanit',
        fontWeight:'bold',
        color:'#000',
        fontSize:23,
        letterSpacing:1,
        display:'flex',
        flexDirection:'row'}}>
        <img src ='logo2.png' width={50}/>
        {title}

        </div>
    )
}