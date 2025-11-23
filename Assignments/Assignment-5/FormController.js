const Modal = require("../Modal/FormModal");
const bcrypt = require("bcrypt");

const getData = async (req, res) => {
  try {
    const users = await Modal.find();
    res.status(200).json({ message: "UserData", users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
// CREATE DATA
const postData = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const form = await Modal.findOne({ email: email });
    const hashPassword = await bcrypt.hash(password, 10);
    if (form) {
      return res.status(200).send({ message: "User  Found" });
    }
    const details = await Modal.create({
      name,
      password: hashPassword,
      email,
      age,
    });
    res.status(200).json(details, { message: "User Created" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "internal server error" });
  }
};
// PUT USER
const updateData = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await Modal.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({
      message: "User Updated Successfully",
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// DELETE USER
const deleteData = async (req, res) => {
  try {
    const user = await Modal.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = {
  getData,
  postData,
  updateData,
  deleteData
};
