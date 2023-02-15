
interface gif {
    id: string,
    title: string,
    url: string
}

type Props = {
    url: string
    title: string
}

export const GifItem = (image: Props) => {

    console.log(image);

    return (
        <div className="card">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
        </div>
    )
}
