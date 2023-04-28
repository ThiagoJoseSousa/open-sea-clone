import diamondGif from '../../assets/homepage/diamond 3d.gif'
import targetIcon from '../../assets/homepage/big target.png'
import checkIcon from '../../assets/homepage/check-mark.svg'

export default function Main () {
return <main className='main__item'>
    <div className='main__item-img'>
        <img src={diamondGif} alt="" />
    </div>
    <div className='main__item-data'>
        <div className='main__item-column'>
            <div className='main__item-column-left'>
                <img src={targetIcon} alt="" className='main__item-icon query__results-icon'/>
                <div className='main__item-data-groups'>
                    <div className='main__item-title'>
                    GORJS DAO: DREAM VORTEX AAAAAAAAAA
                            <img src={checkIcon} />
                    </div>
                    <div className='main__item-info'>
                    GORJS DAO: DREAM VORTEX AAAAAAAAAA
                    <img src={checkIcon} />
                    </div>
                    <div className='main__item-info'>
                    GORJS DAO: DREAM VORTEX AAAAAAAAAA
                    </div>
                </div>
                <div className='main__item-wrapper'>
                        <span className='main__item-box'>
                            1
                            <br />
                            SEC
                        </span>
                        
                        <span className='main__item-box'>
                            1
                            <br />
                            SEC
                        </span>

                        <span className='main__item-box'>
                            1
                            <br />
                            SEC
                        </span>
                        <span className='main__item-box'>
                            1
                            <br />
                            SEC
                        </span>
                </div>
            </div>

            <div className='main__item-column-right'>
                <span  className='main__item-box'>
                ASSASAAS
                </span>
            </div>
        </div>
    </div>
</main>
}