export interface Header {
	name: string;
	label: string;
}

interface TableRow {
	[key: string]: string | number;
}

export interface TableProps {
	headers: Header[];
	data: TableRow[];
}
