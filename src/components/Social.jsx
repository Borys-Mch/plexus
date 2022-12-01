import { facebook, instagram, linkedin, twitter } from "../assets";

const Social = (props) => {
  return (
    <div className={`${props.className} flex-row`}>
      <a href="https://www.instagram.com/">
        <img
          src={instagram}
          alt="Instagram"
          className="w-[38px] h-[38px] mr-9"
        />
      </a>
      <a href="https://www.linkedin.com/">
        <img src={linkedin} alt="LinkedIN" className="w-[38px] h-[38px] mr-9" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={facebook} alt="Facebook" className="w-[38px] h-[38px] mr-9" />
      </a>
      <a href="https://twitter.com/">
        <img src={twitter} alt="Twitter" className="w-[38px] h-[38px]" />
      </a>
    </div>
  );
};

export default Social;
