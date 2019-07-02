const service = {
    Items: ["Papaya", "Banana"],
    AddItem(item) {
        service.Items.push(item);
    },
    DelItem(index) {
        service.Items.splice(index, 1);
    }
};
module.exports = service;