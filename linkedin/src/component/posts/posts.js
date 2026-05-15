import './posts.css';

const OutLinePost = ({ posts }) => {
    const items = Object.values(posts || {});
    return (
        <div className="posts">
            {items.map((item, index) => (
                <div></div>
            ))}
        </div>
    );
};

export default OutLinePost;
