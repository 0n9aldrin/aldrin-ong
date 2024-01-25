module.exports = async (req, res) => {
    let NotionAPI;

    try {
        // Dynamically import the NotionAPI
        const notionModule = await import('notion-client');
        NotionAPI = notionModule.NotionAPI;
    } catch (error) {
        console.error('Error importing notion-client:', error);
        return res.status(500).json({ message: 'Failed to import notion-client' });
    }

    const notion = new NotionAPI();
    const pageId = req.query.pageId; // or your default page ID

    try {
        const recordMap = await notion.getPage(pageId);
        res.status(200).json(recordMap);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
