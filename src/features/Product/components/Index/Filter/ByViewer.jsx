import React from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@material-ui/core";

ByViewer.propTypes = {
  filters: PropTypes.object,
  onViewChange: PropTypes.func,
};

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => `${filters["category.name"]}`,
    isActive: (filters) => true,
    isVisible: (filters) => filters["category.id"],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters["category.id"];
      delete newFilters["category.name"];
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 2,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: (filters) => true,
    isVisible: (filters) => filters.salePrice_gte && filters.salePrice_lte,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: () => {},
  },
];

function ByViewer({ filters, onViewChange }) {
  return (
    <Box component="ul" className="filter-viewer-list">
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id} className="filter-viewer-item">
          <Chip
            label={x.getLabel(filters)}
            color="primary"
            clickable={!x.isRemovable}
            onClick={x.isRemovable ? null : () => {}}
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onViewChange) return;
                    const newFilters = x.onRemove(filters);
                    onViewChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default ByViewer;
