import { BookingData, BookingConfig, formatDate } from './booking-types';

// Email to Customer - Confirmation
export const getCustomerConfirmationEmail = (
  bookingData: BookingData,
  config: BookingConfig,
  bookingId: string
) => {
  const services = bookingData.services?.map((s) => s.name).join(', ') || '';
  const date = bookingData.date ? formatDate(bookingData.date) : '';

  return {
    subject: `Booking Confirmed at ${config.businessName} 🎉`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37 0%, #8B1538 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D4AF37; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-row:last-child { border-bottom: none; }
            .detail-label { font-weight: bold; color: #8B1538; }
            .booking-id { background: #8B1538; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 24px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .button { display: inline-block; background: #8B1538; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Booking Confirmed!</h1>
              <p>Thank you for choosing ${config.businessName}</p>
            </div>
            
            <div class="content">
              <p>Hi ${bookingData.customerName},</p>
              
              <p>Your appointment has been successfully booked! We're excited to see you.</p>
              
              <div class="booking-id">
                Booking #${bookingId.slice(0, 8).toUpperCase()}
              </div>
              
              <div class="booking-details">
                <h3 style="margin-top: 0; color: #8B1538;">📋 Appointment Details</h3>
                
                <div class="detail-row">
                  <span class="detail-label">Services:</span><br/>
                  ${services}
                </div>
                
                ${
                  bookingData.teamMember
                    ? `
                <div class="detail-row">
                  <span class="detail-label">Specialist:</span><br/>
                  ${bookingData.teamMember.name}
                </div>
                `
                    : ''
                }
                
                <div class="detail-row">
                  <span class="detail-label">Date:</span><br/>
                  ${date}
                </div>
                
                <div class="detail-row">
                  <span class="detail-label">Time:</span><br/>
                  ${bookingData.time}
                </div>
                
                <div class="detail-row">
                  <span class="detail-label">Duration:</span><br/>
                  ${Math.floor(bookingData.totalDuration! / 60)}h ${
      bookingData.totalDuration! % 60
    }min
                </div>
                
                <div class="detail-row">
                  <span class="detail-label">Total Price:</span><br/>
                  <strong style="font-size: 18px; color: #D4AF37;">€${
                    bookingData.totalPrice
                  }</strong>
                </div>
              </div>
              
              ${
                bookingData.notes
                  ? `
              <div class="booking-details">
                <h4 style="margin-top: 0; color: #8B1538;">📝 Your Notes:</h4>
                <p>${bookingData.notes}</p>
              </div>
              `
                  : ''
              }
              
              <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <strong>⚠️ Important Reminders:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Please arrive 5-10 minutes before your appointment</li>
                  <li>Cancellations must be made at least 24 hours in advance</li>
                  <li>If you need to reschedule, please contact us as soon as possible</li>
                </ul>
              </div>
              
              <p>If you have any questions, feel free to contact us!</p>
              
              <p style="margin-top: 30px;">
                Looking forward to seeing you!<br/>
                <strong>The ${config.businessName} Team</strong>
              </p>
            </div>
            
            <div class="footer">
              <p>${config.businessName}<br/>
              Need help? Contact us at info@bellastudio.com or +32 52 123 456</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };
};

// Email to Salon - New Booking Alert
export const getSalonNotificationEmail = (
  bookingData: BookingData,
  config: BookingConfig,
  bookingId: string
) => {
  const services = bookingData.services?.map((s) => s.name).join(', ') || '';
  const date = bookingData.date ? formatDate(bookingData.date) : '';

  return {
    subject: `🔔 New Booking - ${bookingData.customerName} - ${date}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
            .header { background: #8B1538; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
            .detail-box { background: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 6px; border-left: 4px solid #D4AF37; }
            .urgent { background: #fff3cd; border-left-color: #ffc107; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🔔 New Booking Alert</h2>
              <p>Booking ID: #${bookingId.slice(0, 8).toUpperCase()}</p>
            </div>
            
            <div class="content">
              <h3>Customer Information</h3>
              <div class="detail-box">
                <strong>Name:</strong> ${bookingData.customerName}<br/>
                <strong>Email:</strong> ${bookingData.customerEmail}<br/>
                <strong>Phone:</strong> ${
                  bookingData.customerPhone || 'Not provided'
                }
              </div>
              
              <h3>Appointment Details</h3>
              <div class="detail-box urgent">
                <strong>Date:</strong> ${date}<br/>
                <strong>Time:</strong> ${bookingData.time}<br/>
                <strong>Duration:</strong> ${Math.floor(
                  bookingData.totalDuration! / 60
                )}h ${bookingData.totalDuration! % 60}min
              </div>
              
              <div class="detail-box">
                <strong>Services:</strong><br/>
                ${services}
              </div>
              
              ${
                bookingData.teamMember
                  ? `
              <div class="detail-box">
                <strong>Assigned to:</strong> ${bookingData.teamMember.name}
              </div>
              `
                  : ''
              }
              
              <div class="detail-box">
                <strong>Total Price:</strong> €${bookingData.totalPrice}
              </div>
              
              ${
                bookingData.notes
                  ? `
              <h3>Customer Notes</h3>
              <div class="detail-box">
                ${bookingData.notes}
              </div>
              `
                  : ''
              }
              
              <p style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 6px;">
                ✅ A confirmation email has been sent to the customer.
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  };
};

// Reminder Email (24h before appointment)
export const getReminderEmail = (
  bookingData: BookingData,
  config: BookingConfig,
  bookingId: string
) => {
  const services = bookingData.services?.map((s) => s.name).join(', ') || '';
  const date = bookingData.date ? formatDate(bookingData.date) : '';

  return {
    subject: `⏰ Reminder: Your appointment tomorrow at ${config.businessName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #D4AF37 0%, #8B1538 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .reminder-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #D4AF37; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⏰ Appointment Reminder</h1>
              <p>See you tomorrow!</p>
            </div>
            
            <div class="content">
              <p>Hi ${bookingData.customerName},</p>
              
              <p>This is a friendly reminder about your appointment tomorrow at ${
                config.businessName
              }.</p>
              
              <div class="reminder-box">
                <h3 style="color: #8B1538; margin-top: 0;">Tomorrow's Appointment</h3>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${bookingData.time}</p>
                <p><strong>Services:</strong> ${services}</p>
                ${
                  bookingData.teamMember
                    ? `<p><strong>With:</strong> ${bookingData.teamMember.name}</p>`
                    : ''
                }
              </div>
              
              <p>Please arrive 5-10 minutes early. If you need to cancel or reschedule, please let us know as soon as possible.</p>
              
              <p>Looking forward to seeing you!<br/>
              <strong>The ${config.businessName} Team</strong></p>
            </div>
          </div>
        </body>
      </html>
    `,
  };
};
