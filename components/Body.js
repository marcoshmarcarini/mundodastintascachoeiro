import Image from 'next/image'

function Conteudo (){
    return (
        <>
            <div className="md:container mx-auto">
                    <div className="container">
                        <div className="logo mt-20">
                            <Image src="/images/lg.svg" width={100} height={100} className="img-logo" />
                        </div>
                        <div className="txt-inicial mt-10">
                            <p>Entre em contato com nossas <br/> lojas pelos números abaixo.</p>
                        </div>
                        <div className="contatos">
                                <a href="https://api.whatsapp.com/send?phone=5528999915777" className="link">Loja Novo Parque</a>
                                <a href="https://api.whatsapp.com/send?phone=5528999238054" className="link">Loja Jones do Santos Neves</a>
                                <a href="https://api.whatsapp.com/send?phone=5528998852732" className="link">Loja Aristides Campos</a>
                                <div className="redes-sociais">
                                    <div className="area-links-redes">
                                    <a href="https://www.facebook.com/mundodastintascachoeiro"><Image src="/images/facebook.png" width={30} height={30} className="link-social"/></a>
                                    </div>
                                    <div className="area-links-redes">
                                    <a href="https://www.instagram.com/mundodastintascachoeiro/"><Image src="/images/instagram.png" width={30} height={30} className="link-social"/></a>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </>
    ) 
}

export default Conteudo

