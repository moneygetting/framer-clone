import bottomMaskGroup from "./bottom-mask-group.svg";
import { CaseStudy01HeroSection } from "./CaseStudy01HeroSection/HeroSection.jsx";
import { CaseStudy02DetailsSection } from "./CaseStudy02DetailsSection/DetailsSection.jsx";
import { ChangeModelOverviewSection } from "./ChangeModelOverviewSection/OverviewSection.jsx";
import image1 from "./image.svg";
import maskGroup from "./mask-group.svg";
import textMaskGroup from "./text-mask-group.svg";
import vector2 from "./vector-2.svg";

const logoMaskGroup = "/logo-mask-group.svg";

const modelIcons = [
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png.png", top: 1973, left: 412 },
  { src: "/image.png", top: 1973, left: 335 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-2.png", top: 1973, left: 260 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-3.png", top: 1973, left: 189 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-4.png", top: 1973, left: 116 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-5.png", top: 1973, left: 39 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-6.png", top: 2101, left: 189 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-7.png", top: 2101, left: 266 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-8.png", top: 2178, left: 189 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-9.png", top: 2035, left: 189 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-10.png", top: 2035, left: 260 },
  { src: "/w6az5cqqg56d95eapz7zp6mh6k-png-11.png", top: 2035, left: 335 },
];

const changeModelHeadings = [
  { top: 1926, left: 612 },
  { top: 2406, left: 39 },
  { top: 2980, left: 651 },
];

export const EndOfBodystart = () => {
  return (
    <main className="relative min-h-[8292px] min-w-[1289px] w-full overflow-hidden bg-[#080808]">
      <div className="absolute left-[-37px] top-[26px] flex h-[8258px] w-[1289px] items-end overflow-y-scroll bg-[linear-gradient(0deg,rgba(8,8,8,1)_0%,rgba(8,8,8,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="relative mb-[0.4px] flex h-[78px] w-[1920px] items-start justify-end p-5">
          <div className="relative h-[38px] w-[140px]">
            <div className="absolute left-px top-px h-[calc(100%_-_2px)] w-[calc(100%_-_2px)] rounded-[10px] bg-white shadow-[0px_10px_26px_-4.5px_#00000005,0px_2.29px_5.95px_-3px_#00000024,0px_0.6px_1.57px_-1.5px_#0000002b]" />
            <div className="absolute left-[7.50%] top-[28.95%] inline-flex h-[42.11%] w-[85%] items-center gap-2.5">
              <div className="relative h-4 w-3">
                <img
                  className="absolute -top-0.5 left-[calc(50%_-_6px)] h-5 w-3"
                  alt="Logo mask group"
                  src={logoMaskGroup}
                />
              </div>
              <img
                className="relative h-2.5 w-[97px]"
                alt=""
                src={textMaskGroup}
              />
            </div>
            <img
              className="absolute left-0 top-0 h-full w-full object-cover"
              alt=""
              src={bottomMaskGroup}
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-[11px] bg-[#ffffff01] opacity-[0.04] shadow-[inset_0px_0px_0px_1px_#000000]" />
          </div>
        </div>
      </div>
      <CaseStudy01HeroSection />
      <img
        className="absolute left-1 top-0 h-[115px] w-[calc(100%_-_4px)] object-cover"
        alt=""
        src={maskGroup}
      />
      <section
        className="absolute left-3.5 top-[412px] flex h-[217px] w-[450px] flex-col items-start"
        aria-label="Case study introduction"
      >
        <p className="relative mt-[-1px] w-full font-profilekosh-framer-website-raleway-regular text-[length:var(--profilekosh-framer-website-raleway-regular-font-size)] font-[number:var(--profilekosh-framer-website-raleway-regular-font-weight)] leading-[var(--profilekosh-framer-website-raleway-regular-line-height)] tracking-[var(--profilekosh-framer-website-raleway-regular-letter-spacing)] text-[#fcfafa] [font-style:var(--profilekosh-framer-website-raleway-regular-font-style)]">
          Hopefully this is good text <br />
          combination, questrial and <br />
          raleway.
        </p>
      </section>
      <header className="absolute left-[60px] top-[131px] flex h-[109px] w-[562px] flex-col items-start">
        <h1 className="relative mt-[-1px] flex items-center text-[80px] font-normal leading-[96px] tracking-[0] text-[#fcfafa] [font-family:'Pixelify_Sans-Regular',Helvetica]">
          Case Study
        </h1>
      </header>
      <div
        className="absolute left-11 top-[131px] flex h-[360px] w-[297px] flex-col items-start"
        aria-hidden="true"
      >
        <div className="relative mt-[-1px] flex items-center text-[300px] font-normal leading-[360px] tracking-[0] text-[#fcfafa] [font-family:'Pixelify_Sans-Regular',Helvetica]">
          01
        </div>
      </div>
      <nav
        className="absolute left-6 top-[17px] flex h-[87px] w-[1249px] gap-[854px] overflow-hidden rounded-[100px] bg-[#050505]"
        aria-label="Profile navigation"
      >
        <div className="relative ml-[31px] mt-[13.5px] flex h-[60px] w-[60px] flex-col items-start justify-center">
          <div
            className="relative h-full w-full flex-1 bg-cover bg-[50%_50%]"
            style={{
              backgroundImage: "url(/j8aknxpdqamkervkkgpqskz8a8m-png.png)",
            }}
          />
        </div>
        <div className="relative mt-[27.1px] flex h-[33.59px] w-[270px] flex-col items-start">
          <span className="relative mt-[-1px] flex w-full items-center font-profilekosh-framer-website-raleway-extrabold text-[length:var(--profilekosh-framer-website-raleway-extrabold-font-size)] font-[number:var(--profilekosh-framer-website-raleway-extrabold-font-weight)] leading-[var(--profilekosh-framer-website-raleway-extrabold-line-height)] tracking-[var(--profilekosh-framer-website-raleway-extrabold-letter-spacing)] text-neutral-50 [font-style:var(--profilekosh-framer-website-raleway-extrabold-font-style)]">
            Senzwelwe&apos;s Profile
          </span>
        </div>
      </nav>
      <div className="absolute left-0 top-[1029px] h-[104px] w-full bg-[linear-gradient(180deg,rgba(8,7,7,0.99)_0%,rgba(5,5,5,1)_100%)] opacity-[0.82] blur-[20.5px]" />
      <div className="absolute left-[39px] top-[1195px] flex h-[731px] w-[745px] flex-col items-start justify-center">
        <div
          className="relative h-full w-full flex-1 bg-[100%_100%]"
          style={{ backgroundImage: "url(/vector.svg)" }}
        />
      </div>
      <section
        className="absolute left-[666px] top-[2012px] flex h-[218px] w-[558px] flex-col items-start"
        aria-label="Change model description"
      >
        <p className="relative mt-[-1px] w-full font-profilekosh-framer-website-raleway-regular text-[length:var(--profilekosh-framer-website-raleway-regular-font-size)] font-[number:var(--profilekosh-framer-website-raleway-regular-font-weight)] leading-[var(--profilekosh-framer-website-raleway-regular-line-height)] tracking-[var(--profilekosh-framer-website-raleway-regular-letter-spacing)] text-[#fcfafa] [font-style:var(--profilekosh-framer-website-raleway-regular-font-style)]">
          Hopefully this is good text combination, <br />
          questrial and raleway. Then this is where <br />
          the rest of the text would go, explaining the <br />
          chosen model, why it was chose n and <br />
          what results would be expected from it&apos;s <br />
          application.
        </p>
      </section>
      <section
        className="absolute left-[71px] top-[2514px] flex h-[370px] w-[314px] flex-col items-start"
        aria-label="Change model detail"
      >
        <p className="relative mt-[-1px] w-full font-profilekosh-framer-website-raleway-regular text-[length:var(--profilekosh-framer-website-raleway-regular-font-size)] font-[number:var(--profilekosh-framer-website-raleway-regular-font-weight)] leading-[var(--profilekosh-framer-website-raleway-regular-line-height)] tracking-[var(--profilekosh-framer-website-raleway-regular-letter-spacing)] text-[#fcfafa] [font-style:var(--profilekosh-framer-website-raleway-regular-font-style)]">
          Hopefully this is good <br />
          text combination, <br />
          questrial and raleway. <br />
          Then this is where the <br />
          rest of the text would <br />
          go, explaining the <br />
          chosen model, why it <br />
          was chose n and what <br />
          results would be <br />
          expected from it&apos;s <br />
          application.
        </p>
      </section>
      <ChangeModelOverviewSection />
      {modelIcons.map((icon) => (
        <div
          key={`${icon.src}-${icon.top}-${icon.left}`}
          className="absolute flex h-[77px] w-[77px] flex-col items-start justify-center"
          style={{ top: `${icon.top}px`, left: `${icon.left}px` }}
          aria-hidden="true"
        >
          <div
            className="relative h-full w-full flex-1 bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${icon.src})` }}
          />
        </div>
      ))}

      <div
        className="absolute left-[178px] top-[2929px] flex h-[102px] w-[99px] flex-col items-start justify-center"
        aria-hidden="true"
      >
        <div
          className="relative h-full w-full flex-1 bg-cover bg-[50%_50%]"
          style={{
            backgroundImage: "url(/5bnxxqerwmetmn113ma4bdqddk-png.png)",
          }}
        />
      </div>
      <div
        className="absolute left-[623px] top-[1280px] flex h-px w-[57px] rotate-[-50deg] flex-col items-start"
        aria-hidden="true"
      >
        <div className="relative h-px w-[57px] overflow-hidden">
          <img
            className="absolute left-[17.19%] top-[-2165.37%] h-[2265.37%] w-[82.81%] rotate-[50deg]"
            alt=""
            src={image1}
          />
        </div>
      </div>
      <div
        className="absolute left-[619px] top-[1277px] flex h-px w-[57px] rotate-[-50deg] flex-col items-start"
        aria-hidden="true"
      >
        <div className="relative h-px w-[57px] overflow-hidden">
          <img
            className="absolute left-[17.19%] top-[-2165.37%] h-[2265.37%] w-[82.81%] rotate-[50deg]"
            alt=""
            src={vector2}
          />
        </div>
      </div>
      <CaseStudy02DetailsSection />
      <div
        className="absolute left-[504px] top-[1163px] flex h-[109px] w-[81px] flex-col items-start"
        aria-hidden="true"
      >
        <div className="relative mt-[-1px] flex w-full items-center text-[80px] font-normal leading-[96px] tracking-[0] text-[#fcfafa] [font-family:'Pixelify_Sans-Regular',Helvetica]">
          01
        </div>
      </div>
      {changeModelHeadings.map((heading) => (
        <h2
          key={`${heading.top}-${heading.left}`}
          className="absolute flex h-[109px] w-[519px] items-center text-[80px] font-normal leading-[96px] tracking-[0] text-[#fcfafa] [font-family:'Pixelify_Sans-Regular',Helvetica]"
          style={{ top: `${heading.top}px`, left: `${heading.left}px` }}
        >
          Change Model
        </h2>
      ))}

      <div
        className="absolute left-[284px] top-[1421px] flex h-[279px] w-64 flex-col items-start"
        aria-hidden="true"
      >
        <div className="relative mt-[-1px] flex w-full items-center justify-center text-center font-profilekosh-framer-website-pixelify-sans-regular text-[length:var(--profilekosh-framer-website-pixelify-sans-regular-font-size)] font-[number:var(--profilekosh-framer-website-pixelify-sans-regular-font-weight)] leading-[var(--profilekosh-framer-website-pixelify-sans-regular-line-height)] tracking-[var(--profilekosh-framer-website-pixelify-sans-regular-letter-spacing)] text-[#fcfafa] [font-style:var(--profilekosh-framer-website-pixelify-sans-regular-font-style)]">
          Q4
        </div>
      </div>
      <section
        className="absolute left-[162px] top-[3372px] flex h-[646px] min-w-[973px] items-start"
        aria-labelledby="case-study-02-title"
      >
        <div className="flex w-[973px]">
          <div className="relative h-[646px] w-[975px]">
            <div className="absolute left-0 top-0 h-[646px] w-[973px] rounded-[100px] bg-white" />
            <h2
              id="case-study-02-title"
              className="absolute left-[200px] top-[296px] flex h-[53px] w-[565px] items-center whitespace-nowrap text-[80px] font-normal leading-[96px] tracking-[0] text-black [font-family:'Pixelify_Sans-Regular',Helvetica]"
            >
              Case Study 02
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};
