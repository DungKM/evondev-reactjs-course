import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
    return (
        <div className="youtube-list">
            {/* children components  */}
            {YoutubeData.map((item, index) => {
                let newClass = '';
                if (index === 1) newClass = "abc";
                // const newClass = index == 1 ? "abc" : "";

                return (
                    <YoutubeItem
                        className={newClass}
                        key={item.id}
                        image={item.image}
                        title={item.title || "This is example of title"}
                        channel={item.channel || "This is example of channel name"}
                        avatar={item.avatar || item.image}
                    />
                );
            })}
        </div>
    )
}
export default YoutubeList;