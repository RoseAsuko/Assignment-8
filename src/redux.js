const redux = require("redux")

function addRow()
{
    return{
        type: "ADD ROW"
    }
}

function addColumns()
{
    return{
        type: "ADD COLUMN"
    }
}

function subRow()
{
    return{
        type: "SUB ROW"
    }
}

function subColumns()
{
    return{
        type: "SUB COLUMN"
    }
}

function fill()
{
    return{
        type: "FILL"
    }
}

function clear()
{
    return{
        type: "CLEAR"
    }
}


function reducer(state = {}, action)
{
    switch(action.type)
    {
        case "ADD ROW":
        return{
            //state + 1 row with as many columns
        }
        
        case "ADD COLUMN":
        return{
            //state + 1 column with as many rows
        }

        case "SUB ROW":
        return{
            //state - 1 row along with the columns
        }

        case "SUB COLUMN":
        return{
            //state - 1 column along with the rows
        }

        case "FILL":
        return{
            //state fill the entire grid
        }

        case "CLEAR":
        return{
            //state clear the entire grid
        }


    }

}

