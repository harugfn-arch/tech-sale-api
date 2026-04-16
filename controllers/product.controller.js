const Product = require("../models/product.model");

exports.getAll = async (req, res) => {
    try {
        const data = await Product.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const data = await Product.getById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = async (req, res) => {
    try {
        await Product.create({
            ...req.body,
        });

        res.json({ message: "Thêm sản phẩm thành công" });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async (req, res) => {
    try {
        console.log("BODY:", req.body);

        await Product.update(req.params.id, req.body);

        res.json({ message: "Cập nhật thành công" });
    } catch (err) {
        console.error("ERROR:", err); // 👈 thêm dòng này
        res.status(500).json(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Product.delete(req.params.id);
        res.json({ message: "Xóa thành công" });
    } catch (err) {
        res.status(500).json(err);
    }
};