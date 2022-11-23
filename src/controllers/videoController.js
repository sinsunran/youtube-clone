let videos = [
    {
        title: "1st video",
        rating: 5,
        comments: 2,
        createdAt: "2 minuates ago",
        views: 59,
        id:1
    },
    {
        title: "2nd video",
        rating: 3,
        comments: 2,
        createdAt: "6 minuates ago",
        views: 159,
        id:2
    },
    {
        title: "3rd video",
        rating: 2,
        comments: 4,
        createdAt: "4 minuates ago",
        views: 1,
        id:3
    },
];

export const trending = (req,res) => { 
    return res.render("home", {pageTitle: "Home", videos });
};
export const watch = (req,res) => {
    const id = req.params.id;
    const video = videos[id - 1];
    console.log("show video " + id);
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
};
export const edit = (req,res) => res.render("edit", {pageTitle: "Edit"});
export const search = (req,res) => res.send("Search Video");
export const upload = (req,res) => res.send("upload Video");
export const remove = (req,res) => res.send("remove Video");