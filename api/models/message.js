const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
   {
      receiver: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      },
      content: {
         type: String,
         trim: true,
         required: true,
         minlength: 10
      },
      isRead: {
         type: Boolean,
         default: false
      }
   },
   {
      timestamps: true
   }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
