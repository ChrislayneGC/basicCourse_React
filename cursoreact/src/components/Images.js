import mountain from '../assets/f5.jpg';

const Images = () => {
    return (
        <div>
            <img src="/f2.jpg" /> {/* dentro do public */}
            <img src={mountain} /> {/* dentro do assets */}
        </div>
    )
}

export default Images