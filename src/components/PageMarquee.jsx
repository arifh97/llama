import Marquee from "react-fast-marquee"

export default function PageMarquee() {
  return (
    <div className="common-marquee bg-white">
      <Marquee autoFill={true} speed={60}>
        <div className="d-flex align-items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2977 2.60523C14.3886 0.342331 17.6114 0.342333 18.7023 2.60523L21.1819 7.74842C21.613 8.64259 22.4585 9.26563 23.4403 9.41255L29.1049 10.2603C31.5427 10.6251 32.5246 13.611 30.7793 15.3515L26.5962 19.5231C25.9085 20.2089 25.5953 21.1851 25.7558 22.143L26.7301 27.9592C27.1422 30.4197 24.5457 32.279 22.349 31.0963L17.4222 28.4435C16.5343 27.9654 15.4657 27.9654 14.5778 28.4435L9.65096 31.0962C7.45429 32.279 4.85775 30.4197 5.26994 27.9592L6.24424 22.143C6.40469 21.1851 6.09154 20.2089 5.40385 19.5231L1.22069 15.3515C-0.52464 13.611 0.457343 10.6251 2.89506 10.2603L8.55975 9.41255C9.54148 9.26563 10.387 8.64259 10.8181 7.74841L13.2977 2.60523Z" fill="url(#paint0_linear_1_427)" />
            <defs>
              <linearGradient id="paint0_linear_1_427" x1="-3" y1="15.5" x2="35" y2="15.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDB547" />
                <stop offset="1" stopColor="#EC2E45" />
              </linearGradient>
            </defs>
          </svg>
          <h4 className="mb-0 text-uppercase">text here</h4>
        </div>
      </Marquee>
    </div>
  )
}
