const FIELD_SIZE = 400;
const CELL_SIZE = 20;
const CELL_IN_LINE = FIELD_SIZE / CELL_SIZE;

class Life
{
	protected field: number[];

	public constructor()
	{
		this.field = [];
	}

	public fill()
	{
		for (let i = 0; i < FIELD_SIZE; i++)
		{
			const elem = (<div id={i} click={ function()
				{
					$(this).toggleClass('on');
				}
			}/>);

			this.field.push(elem);

			$('body > div').append(elem);
		}
		$('body').append(<button click={ () => this.start() }>Запустить симуляцию</button>);
	}

	public prepare()
	{

	}

	public start()
	{

	}
}