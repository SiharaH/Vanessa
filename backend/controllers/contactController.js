import Contact from '../models/contactModel.js'

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation (important for admin panel later)
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    })

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: contact
    })

  } catch (error) {
    console.error("Contact Save Error:", error)

    res.status(500).json({
      success: false,
      message: "Server error"
    })
  }
}