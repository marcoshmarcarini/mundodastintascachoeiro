import Image from 'next/image'

function Rodape(){
    return (
        <div className="footer">
            <div className="txt-footer">
                <p>Powered By</p>
            </div>
            <div className="img-footer">
                <Image src="/images/conteudo.png" width={15} height={15}/>
            </div>
        </div>
    )
}

export default Rodape