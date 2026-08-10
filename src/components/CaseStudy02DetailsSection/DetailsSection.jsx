const titleBlocks = [
    { top: "105px", left: "309px" },
    { top: "758px", left: "607px" },
    { top: "1396px", left: "309px" },
    { top: "1984px", left: "205px" },
    { bottom: "1351px", left: "399px" },
  ];
  
  const descriptionBlocks = [
    {
      top: "214px",
      left: "106px",
      width: "789px",
      paragraphLeft: "calc(50.00% - 370px)",
      applicationLeft: "calc(50.00% - 98px)",
      applicationWidth: "197px",
      lines: [
        "Hopefully this is good text combination,",
        "questrial and raleway. Then this is where the",
        "rest of the text would go, explaining the",
        "chosen model, why it was chose n and what",
        "results would be expected from it's",
      ],
      applicationText: "application.",
    },
    {
      top: "859px",
      left: "501px",
      width: "685px",
      paragraphLeft: "calc(50.00% - 338px)",
      applicationLeft: "calc(50.00% - 171px)",
      applicationWidth: "342px",
      lines: [
        "Hopefully this is good text combination,",
        "questrial and raleway. Then this is where",
        "the rest of the text would go, explaining",
        "the chosen model, why it was chose n",
        "and what results would be expected",
      ],
      applicationText: "from it's application.",
    },
    {
      top: "1497px",
      left: "263px",
      width: "685px",
      paragraphLeft: "calc(50.00% - 338px)",
      applicationLeft: "calc(50.00% - 171px)",
      applicationWidth: "342px",
      lines: [
        "Hopefully this is good text combination,",
        "questrial and raleway. Then this is where",
        "the rest of the text would go, explaining",
        "the chosen model, why it was chose n",
        "and what results would be expected",
      ],
      applicationText: "from it's application.",
    },
    {
      bottom: "1587px",
      left: "503px",
      width: "685px",
      paragraphLeft: "calc(50.00% - 338px)",
      applicationLeft: "calc(50.00% - 171px)",
      applicationWidth: "342px",
      lines: [
        "Hopefully this is good text combination,",
        "questrial and raleway. Then this is where",
        "the rest of the text would go, explaining",
        "the chosen model, why it was chose n",
        "and what results would be expected",
      ],
      applicationText: "from it's application.",
    },
    {
      bottom: "1099px",
      left: "0.75rem",
      width: "685px",
      paragraphLeft: "calc(50.00% - 338px)",
      applicationLeft: "calc(50.00% - 171px)",
      applicationWidth: "342px",
      lines: [
        "Hopefully this is good text combination,",
        "questrial and raleway. Then this is where",
        "the rest of the text would go, explaining",
        "the chosen model, why it was chose n",
        "and what results would be expected",
      ],
      applicationText: "from it's application.",
    },
  ];
  
  export const CaseStudy02DetailsSection = () => {
    return (
      <section
        className="absolute top-[4146px] left-0 w-[1289px] h-[4146px] bg-black"
        aria-labelledby="case-study-02-heading"
      >
        <article className="absolute top-[33px] left-[38px] w-[1214px] h-[3974px] bg-white rounded-[100px] overflow-hidden shadow-[0px_3px_50px_27px_#00000024]">
          <h2 id="case-study-02-heading" className="sr-only">
            Case Study 02
          </h2>
          {titleBlocks.map((titleBlock, index) => (
            <div
              key={`title-${index}`}
              className="flex flex-col w-[596px] h-[109px] items-start absolute"
              style={{
                ...(titleBlock.top != null && { top: titleBlock.top }),
                ...(titleBlock.bottom != null && { bottom: titleBlock.bottom }),
                left: titleBlock.left,
              }}
            >
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex items-center w-[565.01px] mt-[-1.00px] [font-family:'Pixelify_Sans-Regular',Helvetica] font-normal text-black text-[80px] tracking-[0] leading-[96px]">
                  Case Study 02
                </div>
              </div>
            </div>
          ))}
  
          <div className="flex flex-col w-[31px] h-[120px] items-start absolute top-[1387px] left-[-203px]">
            <div className="relative self-stretch w-full h-[120px]" />
          </div>
          {descriptionBlocks.map((block, blockIndex) => (
            <div
              key={`description-${blockIndex}`}
              className="flex flex-col h-[252px] items-start absolute"
              style={{
                ...(block.top != null && { top: block.top }),
                ...(block.bottom != null && { bottom: block.bottom }),
                left: block.left,
                width: block.width,
              }}
            >
              <div className="relative self-stretch w-full h-[252px]">
                <p
                  className="h-[210px] font-profilekosh-framer-website-raleway-bold font-[number:var(--profilekosh-framer-website-raleway-bold-font-weight)] text-black text-[length:var(--profilekosh-framer-website-raleway-bold-font-size)] leading-[var(--profilekosh-framer-website-raleway-bold-line-height)] absolute top-0 text-center tracking-[var(--profilekosh-framer-website-raleway-bold-letter-spacing)] [font-style:var(--profilekosh-framer-website-raleway-bold-font-style)]"
                  style={{ left: block.paragraphLeft }}
                >
                  {block.lines.map((line, lineIndex) => (
                    <span key={`${blockIndex}-${lineIndex}`}>
                      {line}
                      {lineIndex < block.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div
                  className="absolute top-[210px] h-[42px] flex items-center justify-center font-profilekosh-framer-website-raleway-bold font-[number:var(--profilekosh-framer-website-raleway-bold-font-weight)] text-black text-[length:var(--profilekosh-framer-website-raleway-bold-font-size)] text-center tracking-[var(--profilekosh-framer-website-raleway-bold-letter-spacing)] leading-[var(--profilekosh-framer-website-raleway-bold-line-height)] [font-style:var(--profilekosh-framer-website-raleway-bold-font-style)]"
                  style={{
                    left: block.applicationLeft,
                    width: block.applicationWidth,
                  }}
                >
                  {block.applicationText}
                </div>
              </div>
            </div>
          ))}
  
          <div className="flex flex-col w-[536px] h-[543px] items-start justify-center absolute left-[81px] bottom-[631px]">
            <div
              className="relative flex-1 self-stretch w-full grow bg-[url(/t53scy53srnaffvibnjw3kwv4u-png.png)] bg-cover bg-[50%_50%]"
              role="img"
              aria-label="Case study visual"
            />
          </div>
          <div className="absolute top-[1234px] left-[-990px] w-[2004px] -rotate-90 [font-family:'Sandy_Ravage-Regular',Helvetica] font-normal text-[#fcc603] text-[200px] tracking-[0] leading-[normal] whitespace-nowrap">
            Crises&nbsp;&nbsp;Aversion
          </div>
          <div className="flex flex-col w-[789px] h-[442px] items-start absolute top-[193px] left-4 rounded-[0px_100px_100px_0px] overflow-hidden">
            <div className="relative flex-1 w-[789px] grow rounded-[0px_100px_100px_0px] border border-solid border-black" />
          </div>
          <div className="flex flex-col w-[885px] h-[817px] items-start justify-center absolute top-[29px] left-[645px]">
            <div
              className="relative flex-1 self-stretch w-full grow bg-[url(/pmpebbcvjd9f6l0spn4hxun2r0-png.png)] bg-cover bg-[50%_50%]"
              role="img"
              aria-label="Case study hero visual"
            />
          </div>
        </article>
        <footer className="flex flex-col w-[654px] h-[67px] items-start gap-[1.42e-13px] absolute left-[318px] bottom-[23px]">
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center w-fit mt-[-1.00px] font-profilekosh-framer-website-raleway-regular font-[number:var(--profilekosh-framer-website-raleway-regular-font-weight)] text-[#fcfafa] text-[length:var(--profilekosh-framer-website-raleway-regular-font-size)] text-center tracking-[var(--profilekosh-framer-website-raleway-regular-letter-spacing)] leading-[var(--profilekosh-framer-website-raleway-regular-line-height)] whitespace-nowrap [font-style:var(--profilekosh-framer-website-raleway-regular-font-style)]">
              Produced by Senzelweyinkosi MJ.r Dlamini
            </p>
          </div>
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] mb-[-0.82px]">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-profilekosh-framer-website-raleway-regular font-[number:var(--profilekosh-framer-website-raleway-regular-font-weight)] text-[#fcfafa] text-[length:var(--profilekosh-framer-website-raleway-regular-font-size)] text-center tracking-[var(--profilekosh-framer-website-raleway-regular-letter-spacing)] leading-[var(--profilekosh-framer-website-raleway-regular-line-height)] whitespace-nowrap [font-style:var(--profilekosh-framer-website-raleway-regular-font-style)]">
              @2026
            </div>
          </div>
        </footer>
        <div className="flex flex-col w-[654px] h-[34px] items-start absolute left-[430px] bottom-[-5809px]">
          <div className="relative self-stretch w-full h-[33.59px]" />
        </div>
      </section>
    );
  };
  