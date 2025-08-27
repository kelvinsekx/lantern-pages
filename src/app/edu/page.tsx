export default function EducationPage() {
  return (
    <div className="[&_ul]:list-disc [&_ul]:pl-5">
      <ul>
        <li>
          <a href="#masters">Masters</a>
          <ul>
            <li>
              <a href="#unilag">Unilag</a>
              <ul>
                <li>Application</li>
                <li>
                  Economics
                  <ul>
                    <li>Mathematics for Economics</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
