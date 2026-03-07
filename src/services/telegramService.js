const TELEGRAM_BOT_TOKEN = "8739938236:AAFFfggvOfRR8S7ViYA6NeIdkPQmzYEOKuY";
const TELEGRAM_CHAT_ID = "1126185409";

/**
 * Sends a message to the specified Telegram chat using the Bot API.
 * @param {string} message - The text message to send.
 */
export const sendTelegramMessage = async (message) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API Error:', errorData);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error sending Telegram message:', error);
        return false;
    }
};
