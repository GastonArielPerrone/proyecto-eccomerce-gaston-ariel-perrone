import "./Item.css"
export const Item = ({ name, description, price, image, children }) => {
    return (
        <article>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            {children}
        </article>
    )
}