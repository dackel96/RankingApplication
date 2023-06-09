
const RankingGrid = ({ items, imgArr }) => {
    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(x => x.ranking === rankNum);

            cellCollection.push(
                <div id={`rank-${rankNum}`} className="rank-cell">
                </div>);
        } else {
            cellCollection.push(
                <div className="row-label">
                    <h4>
                        {rowLabel}
                    </h4>
                </div>);
        }
    }

    function craeteCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (var i = 1; i <= numCells; i++) {
            rankNum = (i === 1) ? 0 : (numCells * (rowNum - 1)) + i - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;

                label = "Top Tier";
            } else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;

                label = "Middle Tier";
            } else if (rowNum === 3) {
                currCollection = cellCollectionBottom;

                label = "Bottom Tier";
            } else if (rowNum === 4) {
                currCollection = cellCollectionWorst;

                label = "Worst Tier";
            }

            pushCellMarkupToArr(currCollection, rankNum, label);
        }
    }

    function createCellsForRows() {
        const maxRows = 4;

        for (var row = 1; row <= maxRows; row++) {
            craeteCellsForRow(row);
        }
    }

    function createRowsForGrid() {
        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>);
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddle}</div>);
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>);
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorst}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();

        return createRowsForGrid();
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>
    )
}

export default RankingGrid;