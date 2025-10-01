# useState
- Component được re-render sau khi setState được gọi => ĐÃ HIỂU (Ví dụ counter)
- Initial State chỉ dùng cho lần đầu
    - Nếu truyền callback => Lấy giá trị return là initial (Tránh lặp lại thao tác tính toán không cần thiêt) => ĐÃ HIỂU
- setState với callback (Kiến thức cần phải làm rõ hơn)
- Initial State với callback => ĐÃ HIỂU (ví dụ array.reduce)
- Set state là thay state bằng giá trị mới => ĐÃ HIỂU (ví dụ change info)

# two-way binding
- Ràng buộc 2 chiều :  
    - model -> view : Dữ liệu trong model thay đổi => view (UI) thay đổi 
    - view -> model : Người dùng tương tác giao diện (UI) thay đổi => dữ liệu thay đổi 
- Phân tích ví dụ 2 
    - checked (useState) quyết định radio nào được hiển thị trên UI (Model -> view)
    - Người dùng chọn radio button khác => sự kiện onChange => setChecked(id) => Thay đổi State (View -> Model)