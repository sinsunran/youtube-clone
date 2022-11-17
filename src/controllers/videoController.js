export const trending = (req,res) => res.send("Homepage Videos");

export const watch = (req,res) => {
    console.log(req.params);
    return res.send("watch");
}
export const edit = (req,res) => res.send("Edit Video");
export const search = (req,res) => res.send("Search Video");
export const upload = (req,res) => res.send("upload Video");
export const remove = (req,res) => res.send("remove Video");