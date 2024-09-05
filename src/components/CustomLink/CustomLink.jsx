import Style from './Link.module.css';

export default function SocialLink(props) {
    return (
        <a href={props.src} className={Style.SocialLink} target='_blank'>
            <img src={props.img} className={Style.SocialLinkIMG} />
        </a>
    )
}