const CardTailwind = (props) => {
    return (
        <div className="relative">
            <div className="w-full rounded-lg h-[400px]">
                <img src="https://cdn.dribbble.com/userupload/33476220/file/original-d4ca59ef4ed0cbb2bb3600be756e5d74.png?resize=1024x768&vertical=center" alt="" />
            </div>
            <div className="card-content">
                <div className="card-top">
                    <div className="card-user">
                        <img src="https://cdn.dribbble.com/userupload/33476220/file/original-d4ca59ef4ed0cbb2bb3600be756e5d74.png?resize=1024x768&vertical=center" alt="" />
                        <div className="">@keymagic</div>
                    </div>
                    <div className="card-heart">
                        <img src="/heart_833472.png" alt="heart" />
                        <span>256</span>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="">Cosmic Perspective</div>
                    <div secondary={props.secondary}>12,000 PSL</div>
                </div>
            </div>
        </div>
    );
}

export default CardTailwind;