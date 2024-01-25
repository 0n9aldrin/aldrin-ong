// /api/notion.js
const { NotionAPI } = require('notion-client');

module.exports = async (req, res) => {
    const notion = new NotionAPI();
    const pageId = req.query.pageId; // or your fixed page ID

    if (!pageId) {
        return res.status(400).json({ message: 'Page ID is required' });
    }

    try {
        console.log('Fetching page:', pageId);
        const recordMap = await notion.getPage(pageId);
        res.status(200).json(recordMap);
    } catch (error) {
        console.error('Error fetching from Notion:', error);
        res.status(500).json({ message: error.message });
    }
};
