import { AiFillCopyrightCircle, AiOutlineHeart } from 'react-icons/ai'
import Head from 'next/head'

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}


const NFTImage = ({ selectedNft }) => {
    return (
        <>
        <Head>
            <title>Crypto - NFTs</title>
            <link rel="icon" href="../Logo.png" />
        </Head>
      <div>
        <div className={style.topBar}>
          <div className={style.topBarContent}>
            <AiFillCopyrightCircle/>
            <div className={style.likesCounter}>
              <AiOutlineHeart />
              
            </div>
          </div>
        </div>
        <div>
          {console.log(selectedNft, '🎆')}
          <img src={selectedNft?.image} />
        </div>
      </div>
      </>
    )
  }

export default NFTImage;
