import React from 'react'


const sharedClasses = {
    flex: 'flex',
    itemsCenter: 'items-center',
    justifyBetween: 'justify-between',
    mb4: 'mb-4',
    spaceX2: 'space-x-2',
    textOrange: 'text-orange-500',
    text2xl: 'text-2xl',
    fontBold: 'font-bold',
    textLg: 'text-lg',
    fontSemibold: 'font-semibold',
    textRed: 'text-red-600',
    minW200: 'min-w-[200px]',
    bgZinc100: 'bg-zinc-100',
    p4: 'p-4',
    roundedLg: 'rounded-lg',
    shadow: 'shadow',
    mb3: 'mb-3',
    textZinc600: 'text-zinc-600',
    textSm: 'text-sm',
    textZinc500: 'text-zinc-500',
  };
  
  const HotDeal = () => {
    return (
      <div className={`bg-white p-6`}>
        <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.justifyBetween} ${sharedClasses.mb4}`}>
          <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.spaceX2}`}>
            <span className={`${sharedClasses.textOrange} ${sharedClasses.text2xl}`}>🔥</span>
            <h2 className={`${sharedClasses.text2xl} ${sharedClasses.fontBold}`}>Hot Deal Today</h2>
          </div>
          <div className={`${sharedClasses.textLg} ${sharedClasses.fontSemibold} ${sharedClasses.textRed}`}>
            <span>01</span>:<span>29</span>:<span>33</span>
          </div>
        </div>
        <div className={`${sharedClasses.flex} overflow-x-auto gap-4`}>
          <div className={`${sharedClasses.minW200} ${sharedClasses.bgZinc100} ${sharedClasses.p4} ${sharedClasses.roundedLg} ${sharedClasses.shadow}`}>
            <img src="src\assets\iphone2.png" alt="Apple iPhone" className={sharedClasses.mb3} />
            <h3 className={sharedClasses.fontSemibold}>Apple iPhone</h3>
            <p className={sharedClasses.textZinc600}>$83.74</p>
            <p className={`${sharedClasses.textSm} ${sharedClasses.textZinc500}`}>497 Sold</p>
          </div>
          <div className={`${sharedClasses.minW200} ${sharedClasses.bgZinc100} ${sharedClasses.p4} ${sharedClasses.roundedLg} ${sharedClasses.shadow}`}>
            <img src="src\assets\headphone.png" alt="Samsung Galaxy" className={sharedClasses.mb3} />
            <h3 className={sharedClasses.fontSemibold}>Samsung Galaxy</h3>
            <p className={sharedClasses.textZinc600}>$99.99</p>
            <p className={`${sharedClasses.textSm} ${sharedClasses.textZinc500}`}>312 Sold</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HotDeal;