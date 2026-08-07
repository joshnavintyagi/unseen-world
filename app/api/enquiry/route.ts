import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function safe(value: unknown) {
  if (value === undefined || value === null || value === "") {
    return "Not provided";
  }

  return String(value);
}

function escapeHtml(value: unknown) {
  return safe(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const journey = await request.json();

    console.log("====================================");
    console.log("NEW UNSEEN WORLD JOURNEY ENQUIRY");
    console.log("====================================");
    console.log(journey);
    console.log("====================================");

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const customerName =
      journey.name ||
      journey.customerName ||
      journey.fullName ||
      "New customer";

    const customerEmail =
      journey.email ||
      journey.customerEmail ||
      "";

    const service =
      journey.service ||
      journey.journeyType ||
      journey.type ||
      "Journey enquiry";

    const pickup =
      journey.pickup ||
      journey.pickUp ||
      journey.pickupLocation ||
      journey.from ||
      "";

    const destination =
      journey.destination ||
      journey.dropoff ||
      journey.dropOff ||
      journey.to ||
      "";

    const travelDate =
      journey.travelDate ||
      journey.date ||
      "";

    const pickupTime =
      journey.pickupTime ||
      journey.arrivalTime ||
      journey.time ||
      "";

    const flightNumber =
      journey.flightNumber ||
      "";

    const airline =
      journey.airline ||
      "";

    const flyingFrom =
      journey.flyingFrom ||
      journey.arrivingFrom ||
      journey.flightOrigin ||
      "";

    const phone =
      journey.phone ||
      journey.telephone ||
      journey.mobile ||
      "";

    const passengers =
      journey.passengers ||
      journey.passengerCount ||
      "";

    const message =
      journey.message ||
      journey.notes ||
      journey.additionalInformation ||
      "";

    const priority =
      journey.isPriority ||
      journey.priority ||
      false;

    const subject = priority
      ? `PRIORITY Journey Enquiry — ${safe(customerName)}`
      : `New Journey Enquiry — ${safe(customerName)}`;

    const { data, error } = await resend.emails.send({
      from: "Unseen World Website <enquiries@unseenworldtravel.com>",

      // For now, enquiries arrive in your existing Gmail inbox.
      to: ["unseenworldtravel@gmail.com"],

      ...(customerEmail
        ? {
            replyTo: customerEmail,
          }
        : {}),

      subject,

      html: `
        <!DOCTYPE html>
        <html>
          <body style="
            margin:0;
            padding:0;
            background:#07111f;
            font-family:Arial,Helvetica,sans-serif;
            color:#ffffff;
          ">

            <div style="
              max-width:680px;
              margin:0 auto;
              padding:40px 20px;
            ">

              <div style="
                border:1px solid #b8952e;
                border-radius:18px;
                overflow:hidden;
                background:#0c1726;
              ">

                <div style="
                  padding:30px;
                  text-align:center;
                  border-bottom:1px solid #283445;
                ">

                  <div style="
                    color:#d9b83f;
                    font-size:12px;
                    font-weight:700;
                    letter-spacing:4px;
                    margin-bottom:12px;
                  ">
                    UNSEEN WORLD
                  </div>

                  <h1 style="
                    margin:0;
                    font-size:27px;
                    color:#ffffff;
                  ">
                    ${priority ? "Priority Journey Enquiry" : "New Journey Enquiry"}
                  </h1>

                </div>

                <div style="padding:30px;">

                  <p style="
                    margin-top:0;
                    color:#aebed0;
                    font-size:15px;
                    line-height:1.6;
                  ">
                    A new journey request has been submitted through
                    unseenworldtravel.com.
                  </p>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse:collapse;
                      margin-top:25px;
                      font-size:15px;
                    "
                  >

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;width:38%;">
                        Customer
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(customerName)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Email
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(customerEmail)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Phone
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(phone)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Journey
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(service)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Travel date
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(travelDate)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Pickup / arrival time
                      </td>
                      <td style="padding:12px 0;color:#d9b83f;font-weight:700;">
                        ${escapeHtml(pickupTime)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Pick-up
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(pickup)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Destination
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(destination)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Passengers
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(passengers)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Flight number
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(flightNumber)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Airline
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(airline)}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0;color:#8094ad;">
                        Arriving / flying from
                      </td>
                      <td style="padding:12px 0;color:#ffffff;">
                        ${escapeHtml(flyingFrom)}
                      </td>
                    </tr>

                  </table>

                  <div style="
                    margin-top:25px;
                    padding:20px;
                    border-radius:12px;
                    background:#08121f;
                    border:1px solid #273548;
                  ">

                    <div style="
                      color:#d9b83f;
                      font-size:11px;
                      letter-spacing:2px;
                      font-weight:700;
                      margin-bottom:10px;
                    ">
                      CUSTOMER MESSAGE / NOTES
                    </div>

                    <div style="
                      color:#ffffff;
                      line-height:1.6;
                      white-space:pre-wrap;
                    ">
                      ${escapeHtml(message)}
                    </div>

                  </div>

                  ${
                    priority
                      ? `
                        <div style="
                          margin-top:25px;
                          padding:16px;
                          text-align:center;
                          border-radius:10px;
                          background:#332b0d;
                          color:#f1ce43;
                          font-weight:700;
                        ">
                          ⚡ SHORT-NOTICE / PRIORITY JOURNEY
                        </div>
                      `
                      : ""
                  }

                </div>

                <div style="
                  padding:20px 30px;
                  text-align:center;
                  border-top:1px solid #283445;
                  color:#71849b;
                  font-size:12px;
                ">
                  Unseen World Travel · unseenworldtravel.com
                </div>

              </div>

            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Journey received, but the notification email could not be sent.",
        },
        {
          status: 500,
        }
      );
    }

    console.log("Resend email sent:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Journey enquiry received successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Journey enquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process journey enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}