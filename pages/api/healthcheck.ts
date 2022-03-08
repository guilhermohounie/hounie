import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(200).json({
      success: "Healcheck succeeded.",
    });
  } catch (error) {
    return res.status(400).json({ error: "Healthcheck failed." });
  }
};

export default handler;
