/** @jsx jsx */
import { jsx } from "theme-ui";
import { MdFileDownload } from "react-icons/md";

function Download({ title = "Project.framerx", url = "" }) {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={url}
			sx={{ textDecoration: "none" }}
		>
			<div
				sx={{
					width: ["auto", "fit-content"],
					display: "flex",
					flexDirection: "row",
					placeItems: "center",
					placeContent: "center",
					py: 3,
					px: 4,
					mb: 4,
					borderRadius: 8,
					bg: "primary",
					color: "muted",
					h3: {
						marginTop: 0,
						marginBottom: 0,
						lineHeight: 1
					}
				}}
			>
				<MdFileDownload size="1.5em" />
				<h3 sx={{ ml: 2 }}>{title}</h3>
			</div>
		</a>
	);
}

export default Download;
