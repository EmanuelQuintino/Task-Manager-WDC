import { Container } from "./style";

export function Pagination() {
  return (
    <Container>
      <div className="limitBox">
        <span>Quatidade por página: </span>
        <select name="limit" id="limit">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div className="pageNumbers">
        <span>1</span>
        <span> / </span>
        <span>10</span>
      </div>

      <div className="paginationButtons">
        <button>
          <i className="material-icons">arrow_back_ios</i>
        </button>

        <button>
          <i className="material-icons">arrow_forward_ios</i>
        </button>
      </div>
    </Container>
  );
}
