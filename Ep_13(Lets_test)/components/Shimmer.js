export const Shimmer = ({ children }) => {
    // console.log(children);
    const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
    return (
        <>
            {
                shimmerArray.map((index) => (
                    <div key={index} className="shimmer-card">
                        <span className="loader-element"></span>
                    </div>
                ))
            }
        </>
    )
}