import Link from 'next/link'

export default function Footer(props){
    return(
            <Link href="[id].js/info.0.json" as={`/${props.num}/info.0.json`}>
                <a>{props.title}</a>
            </Link>
    )
}