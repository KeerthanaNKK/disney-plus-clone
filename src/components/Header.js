import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg'/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYYGBgZGBgYGhgYGBgYGBwYGBgZGhgYGRocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjErJCs0NDQ0NDQ0NDQ0NDU0NjQxNDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xAA/EAACAQIDBQUGBQIEBgMAAAABAgADEQQhMQUSQVFhBiIycYETkaGxwfAUQlJi0XKSI4Ki8RU0Q7LS4TNTwv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAtEQACAgICAQMDAwMFAAAAAAAAAQIRAzESIUEEE1EiYXEygbEU0fEzQlKRof/aAAwDAQACEQMRAD8A3+CxKp7Wo2iDdHnqfebD0mRxuJLuzt1P8S9tHE2DKPzOWPkMh9TAuJeydTHez28GJR+ryyTBaE85S2jVuddMv5lqid1IDx1a5PKKzphG5NlXG4gsegyAlVU3jYRWzPnL2Ew8nJhm6VF7ZmFzGWQmtwGGg3ZmE0mlw9KwkW7Z52efglpJaTqIiLJlWMjibGWnWkoWLuQ0LZDuRhSWSsaVgZkytuxrJLLLI2WAdMH4nDA8IBx+A1ymqYSriaF4GVhNxZ5/VU02vnbiOIHG3SabY+L3lGd+R5jgZW2nguP35QTs2qaNTdPgY5dCeEpCXg74yU1RvLb69YA2nhNcsjqPqOkKYStb74Sxj6IZd4SzJRk8c/sefhjTYqdPpzhnZ2N3DzVtf5lfamE5enTmIMw9UqbH/Y/xE0epUcsDcqwYW1BHvEB4qkaLXUndOhBsR084/ZmL/KT5HlCGIQOpVv8AY8CI+zljeOVPXkds/bL2sWv58Yao7WvqvuP8zDrdG3TqDlDOExG8L8RCqBn9LD9SRpf+IpyPunQN7Ycp0akcn9PEC4h95zKOKe7AchJ3fdF+JlFblupMU7o9snxtTdTqZnq78PWFdqvnbkIFfMxJFYqo2TYWlc390PbPw2d5UwOH0E0WAoaSEpHLmmE8Bh7CFkSQ4WnYS4qwRR5U5WzkWSKs5RJFEokSbOAihYoEeBCAjKRpSWLRCIGjWVGWRuJaZZC6RGOmViIxxJXEiaKOihiaNxMxtTBa/ec2TreCcfQuNINHTilTK+yaxdATrofMQxhquqnQzP7N7rleBz9YVY2sZ1RlyjZ0SSkV9q4SxvwMy2Pw9j96TdNZ0sZnsbhbgi3eW/qOMzK+myuLpgLDVyDrmPlNJg8Rvr+5fiOUy9WnY5ekt4DFFSGHrAnR2ZYKatbC+Oo767w1HylTC4gqfLWEmcWDro2vQwbjqW6d9dD8+UZiYpWuLCf4xZ0C+1EWax/ZQzEVbmLhEub8pDxlqk1rAcMz6QkqpdArHvdmPW30EHUqihu8cpYxVT4/WVXwdxrJthyWo0jU7NZGHdYE+ec0uzqWk8spM9M3GYnofZTagcBSbm2V/lJSj5PNzXTNbSSSqsbTkojJHntigRwE4CObIRhRj1AusE47tClPK6k8rg/AQVt6vUPdF89f4AgKj2fq1D3iQDzNhJuR148Ma5SYRxnbgg2Ww8lJPxlBu19ZvDvn0I+UMYDslTXxG/lkIdobFor+QGC7HcsMdKzDL2jxJ0Vr/wBRPyEmTtNiV8SE9Re/uzBnoNPBIMggHkLRzYReQmqxXmh/xMNR7XN+dCB5WMNYHaaVR3GB6ffHpCmJ2VScWZFPp/EC4nsygO9TJRuYPzEDQOWOWlQRMr1lvK1GpUpndq2ZdA44dGHDzlpzEMlTAtaluOG6wi2aXkddLzsI9wV5ZfxLYZeDpg7Q7DVLG3ORY5c98aiMfIyxvbwB55GXGap2Z7auFAs6+B8x+1uIgdhuG/A6+c1Ypg71JtD3l/8AXlAWKwxBZG10/giK0d2DJa4st7LxQ8DeFvsSzUS11PkfoZn8O5B3TqsP0qntEv8AmQZ9V5wphyR4y5IqfguoiSxedMb3JA9BbOdTPjPJT8Yr8uAiU17jHnGB4AWKbv28o+rVVdTaVcSSWJGeekqV8QCcweVpNxsTJk47CqWcZEGWcC7UnV1OQIJEzlPELlcWI/MpsfUaGGsBiw9lY3vkG/8AKTlFxIqUJqmexYCsHRWBuCJZMx3Y3HlS1Bzpms2UyfR5WaHCTQqGOYxizmabkSor4hE13ReUKle2UnxVSZvblQhN9X3HTNWOYJOqEcQeUjJ2zpxQcg0mJ1PLOTrtFALmogHAl1HXnPNR2p3n3MRv0lA8NIZserXBA8oFXa6U6zvQpqUb/p10VwPLO49DGjjl5KvHE9rw200YkB1a1r2IOukuJjVPGeGVu0AZ1cYekhAIZULoHHDQ3UjOxHM6wthe1i8HqJ0e1VPLfWzj3GM4yjoHswl5r8nsRdTxkTATz/ZXak1GDNki5A8GY8SeGWgPOaihtINoYrm100TfppLst16Y5X6SiyAZDSXPxAOXGQPaBtM0U1sqOkH1H3HVuDdw+eq/G49YWZYN2nh99GXiRkeRGYPvAhg+LstjlUux+JXj99Y3DNe685FgMT7SmG/MMmHJhkREvum4nWdLXVC41SVDr40N/O2okGPpB0FRc7D/AEn+CfcYRci4PBsj58P4lPCj2btTbwNmvkdR98+kxoya7W0ZrGUzk41GssYDEbpDDQ/ZEvYzC7jsh0P2IJRNxivA6dGi6O6MlOBoL0es6BrtyiQ2J7X3GVDl5mSUmsj+QkWIOduUkV92m56cYWM9GVxFJrkrry/iUXpsTmDrrNGio/jUr+5OHmp1kWP2e6oXUh04OnAjgw4RVKjjzw77tfwWtmdnKZTfrPuJu7xa17crwFiaBpMd1gyA23hexmwqH22BYJmSgIA5oQSvnlM3RopVphS+73rhgpYZixBUG9+XrHSvZwqbt/YN9nsYX3Ko1Rwjc7HS89YptdQeYvPH8BSFDFNSVWVKiCwfUkC6vbhfM26z13BpZEB4KL+gzkXGpULnlySY+0hqX5GVqm3FG8aa727a7NkDc/l6dY3A7Ydy11UALfK/PzitL5EWHJVtFfEtMJt7Fh2Zt/cVPI3b+k6n+Z6RS2jTqrZ1tmVzzGWWvCZvtb2MLqrYdVYg3YG28RwKnj5RFDuzpwzUHUlT/wDDz/ZWx6uNqXNzzY6AcBlPQ9l9gKSgb2Z8hLPZPBimGQizIwDDjewOfvmxS1p0ximrZzepzyjJxi/3+TzftD2RwRV2Sud+ndCq2NnBzDC1wZ5nj8E1O28LX08hleb3tNUejiMRTLMA1T2qi5sVqZ3t/VvD0gfGYVcSVZXQEKqVFc7pBXRlOhFrHmM43GisG3G27sAvgcTh1Wo1OrSVrbrspCsDmNcjlwMuYHtE65OWC/ssPnp6TVbYGKrUPYFmxCUlDO4AU3UEljfVRoOJ3YFw+xKIo03xJKK9wrLYO1+IB1AEnNR8orilNeQxge2mGRbHf9EJJPMknM+s0Gxdq/iVLrTdE/KXsGbqFF7L1JzgrZXYLC39oKr1k/KCFC/5reL4CanDYUILDpOeUYrQspJ38iNK2IXKXHWVq4yigRlqGK9jiSp8FQ59H5/fOG6ycPUTN9oKd7nlnCWwsf7Wnuse+mR6jgZ1Y5WqO7cUwnhjvKUPp9+cnxOF30v+ZfnKgaxDD1hjDtx5/YMchkuLtAjEqKlMNxXut5flP0gjGYa4v7/McZoMRTFOpn4H7rev3f0lN6G6zIfTqdQfUfOYriycdaAFmiQp+GHWdBR1e7EC1fFExL7tJ78h84reKJtAd1x0WEd66AgxDsLIMucm2Vi3oPv33kPdZNQ4OoI+skQ9y0bhkuwiMWWFSj9TsL47DNQT8Thjei/eZD+U6HLhY5GB0Xfff9iELd7xEA9d0aTZdm2F2w7i6ODYHTetmPUSs2ECOy20Pw4SfNo86MEpuL/yVtlbP3qyEr3i6i9s7ceuk2vabE7qKinxkg2/QubD1Nh6yj2foDf3z+UE+pyEd2jzqryVL/3Mf/EQW6sX6ZZkq6XZW2elwwOhtL9Gnu33eIt6Shss+KFVWZNUWzOpNESYbKw5k++W9n4xqJsxunLivUfxFVZHWp3gt3aISqfUgtiMIKlqtJgGIF7ZqwGm8OY56wMe1CI/s3Ri4/QGb3i119Zb2Viyjbp8J+B5yba+Bv3kAG9e+Q8R1PnKKTStHK4RUuMu14Zku1GNweLTddmSohO44A3lPFWB1U2zB5TDUyaZJWtTcaXVX8vCAbH1noL9nxuMigDeQre2ed7m/Mk5mJhOzQWmaZJsRY5DlYxfdkdUFiiqTMK+JqIhcb5R7Bt4labEHK6A3YedhLGB2bVrVd6p/iXAAbgoGgC6Begm3wvZlFRVbvboAz0NhbSF8PhUQBVUADLIRW2yyzwgvpXZU2PghSTdGQ4DhLbmOZs7C5PIC5/9eslTCOdbKP7m/gfGBI45St8mVGyFzl5wbjMUOAJ+A95+kM1TST9zf3H36L8IHxS755D3n36QPopipvsz+L7xJa1uXCC2xYoVQ6aaMoFsuMP4qgBoPU5mZrauHve2vCaEqZ3Rmkuka5HV1DqbqwvL2z6v5T9iYvsztTdPs3yVtP2txE1WYII1HxE607EnFNfwFcZR30KnXgeRGh98GqS6XOTp3WHHLj9fKFcNU31B4yjj6RRxVGhsr/8A5c/I9DMc8HT4kHtm/SJ0sbyfob3xZihimHejcf8An++Akzr3yP3H5xtdLuQOI+NoXo9L/bYHzAlrZNPefyuY+rQNsxCOw8NY35gyb0TlP6WWURlZWXIggg9RnD+0MG9Zg6JcEZ2ZR14kQbVpQrRpOadHddl8W9ZiMlY/SRs87K+1JEmCw1ZFt7F8zckFDkNNGkW194vbdIYoAVNrjdYnhzvLK4ioW7rv5bxjcUSbOc2DAE8d0/7TS6QkG4zUnQP2Xk1uYh2lTlathdxlYbpvY2HA8fmDClFcpkvBs2ZS7Q1UimneThLRd2Gjm5lQ4cQlhH3kKtwy/gyAiPwtM3vw0hj0xZS5LsT2cbUAAuSAOZNpNiKR4NujibXPpfKVA1NTcAu36j3v9RyHpCwR7GqC3gUkfqPdX0vmfQRXw6rm7f5R3R8O80bVxLnjuj9uv9x+gEqHW/HnqfUmI5Ioky2cUALIgA5kWHooz99pUr1y2pJ6aD3D63kbtIXaI5DxihHeV6jRXaV3aLZeMStic4GxtO8M1JSxCzIrFmOxSFHuOJv6jX6TV7D2sHUKxzGQP3wMC4+l85VwdFi4Cm2pv6S8ZFVSVPR6Lg6+43Q6ww6BhY5qw+B4TA7M2uVf2dXI6Bvo38zZ7OxH5T6fxLp2Qz42vqRD/wAIX9T++dC27OmOf3JHnWMTdrOOTt/3GJh2/wAZb8WtLfaCjuYl/wB26/8AcM/iDBtxv62IIIhlo9eMuWJP7GhxWEVkI6Sts9d3d9RLVHFBlvIKi7mY0BDD35znV6OJN00y66w7hUAVE4hL/wBxJg3BUN9hy1J6SXHYjdfeXUZdLDhAujmyPk+IQZ1W4AFzKw1tzy/j4wdX2jfP4SnU2w4YBEVuZZiPdYQSkmzRwyqzU4RVGR4c+Us0zAmHxLsAWUAnkbj39YZw+kEX4I5ItbLF4kS84GOSFjQ5BuIpMY5mChMbUDNulb2AbPMd4kaf5ZC7xmIf/HYcqSX9Xe3yMRokn2UUaSGMZE7SRpXeTbKIazSB2j2WMYRSiIXkTSdlkLiGh0ys0p4ky3VMo1TCNEE4wSF6LojOi3e2UmcbzgdYZFN2BCIX4a2vbUDnaMh5SSRjsPhXsWe+8eBzvzvNFsLbO4RTqHL8rnh0PTrJUpB+BFiQQRYgjIgzP4txvsoIyNjbnKwk2y2OUZLiz0n8cf1fETp5p7Q8zOlrG/pofJtu2dGzo/BlKHzU3HzMy+PGV+nyzE3HaynfDO36Cr+gNj8DPPcTjQ3dHvjSF9JO8VPwEMNtMJZWGRGo1ELUMXhiO/UY/tAmTXQRA9pOlZaWGMlej0XZu2EdClFSoXLPxW5xGBmN2NtDccE6HJvIzdIoIuNDnfpEkjzs+NY5daZRqYPeBvlHbJ2bc3OecnrY5EIRgbEajhJsLtGkmhLXOZt/Mm12Lc+PSDVCgAJzAobjSJQxiP4W9OPuk4Mfiq6ONtp9nK18468rtTIzT3HT0MQ4gjxKy+lx7xNdbBV6LBMaguwHr7pElTe8IJ9LD4yfeCA/qMwWqKIF6lV+bKg/pQW/7i8c0UC2QiGSY9jGkTCTMZE0FDJkLCNKx5jGMyQ1kLytUMndpSrPMPEq12g7E1gBLGLrWEzm0cZYHOGKstFFbH7QKMCuoN5puyvaFn37oSqKWzOQLXJtbyJnn1SoWa83PZ7GLgsF7SogLV2JRNGZAAN48l19Lc5bjSEydoE7c7WPUdzTUJvHNtW0AuOA0mcp1SDe/WNxLXdja1yTblc3tI1MdJIMfp0E/wDiJ6ToMnQlfdke77boFsPVUZk03sOu6SBPHmOdxxzntxIM8c2vhvZ1qlPgtRgPK9x8CI8hfSS3E5DGV8o2g/wklYd2TPS3ESg+Ym47MbQ319mxzXNTzXl6TAI0J7PxbI6spzBuPqPIzNWQyY/chQc2+ro5JFwT3Tw/pPIwcuMfghv6TXYt1rUVceEkE9DxHvgpsKASR0kZdEMM7VS2uijh9pOue43uvNFs3tINHP8AcCJVwWFQ72++6QMusuLs5LKS6m40tFV7QM3tPpoN0dp02HjX3yPDbYpu7Ij3ZdQPvOChsWk4zS9/MfKX8BsulS8CKvlr749tnBJYldXYTLnnI2MS8QmBkkdeITEvELRRhGMjYzmaRO0FDI52kDmc7ytVrWhGSOqvBmKxAEXFYsDjM7tLaIgSsvCI3aGOmbxNYubSTEVyxiU6dgSZWMaKv4LfZzYxxOISloniqN+mmviN+Z0HUyz2n2oMRXJTKmgFOmo0CLkCB1190KMfwOB3RliMYLseKUB4R0Juf7ukybZCU8kl27K1Q5mMWc5nLGD5OnTp0wT6CC5zzPtvhdzFueDqrj1Fj8VM9DNSZftxhN+mtUaod0/0sfofnHkuhcH0z/JhVaxlxTcSiZNQe2Umz1ISojGRtJ6bSPEDO/OKjQAXTo2HZPFBi1FvDUBK/wBQGY9R8o/F0a9JyFAdL5XNmHrxmewNc03VxqrBh6aj3T0p0RwGGasAwPQi4iSVnF6m8U+S0/5MxhatRzY0iPNhaaHA4E+JrDoJZpYYCWRJqPyceTO5dIXSNvOYxt4zIIW84tGlowtMFDi0YzxrPIXqwUFEjtK9SqBK+IxVuMEYraAHGKVjFsIYjFQPjNogXzgrGbVvkIKrVGbWZRs6IwS2WcbtInSCnYsZMlAmF9ibFavVWmuRY5n9K6sx8hKJJDSkkgVg8CzmyqWPIAk+4TS7E7O71YDE06iUVUsTutuswtZSRmBa/naEdrbXFBTQwYFNF7pqAD2jkZFi2tuX2JmKW2cQrb64isDz32PvBNj6x0kzmlOTXXRD2lx3t8S7i+6DuIDwVcgIErNNlltBHVlVcXTTfV1AUVkW+8rAZBxzmJeNVFIStURGOIiolzaOcZm3CEdLqxk6P3YsAT3dqUr4nCB0ZGGTKVPqIVelaV2WVOaMzxvF4dqbujaqxU+Y+/jK95uu3Gx94fiEGagCoBxHB/TQ9LcphTJNUenjmpRsexuPKNQxAYgNoCjfdl+hUyty0m57IbQ30NJjmma9UJ09D8xPPUa0J7NxrI6uhsy+4jiD0mZsuNZsbj58HqamKYN2VtVK47ps4HeQ6jy5jrCN4jR4c8coPjJdnEyNmiOZVqYgDjFYqVk7PInqwZidqKvGBMVtwnwzfgvDDOWkaOtiwOMGYrayjjAmHxHtGs7leQ4HpeFV2ai8LnrnEk2tlXh4OpA3EbRd/ApPlpKf4So/iNug1mhFHpJ6eEJgt+BuSiZ6lsoDh6mSNs0DhNMMIBwlPEU4VfkR5LAqYIcof7MJuvV3fH+Hqbnnlp6QfUcKJVobTanUV01Q3z0I0IPQgkesZPsWSck0D8UYFqUWUkqcjnYjTymwxmDSuxfDkd7M0mIDKTqAdGF4O/4DiGNhSYdWsFHqTKRTQyaa7IOxVN/x1Ag3O8Sx4bgRt70tM5jrGrU3fCaj7tv075t6Wmor4lMGjpTdXxNRSjOmaUkPiVW4ufpM1SoWlH0imOFyta0RIm6C3ukKDjJ8Q1zbhIjFKSq6Qk6dOmAfR9ZOUqNTvCDHlIXW/nKo82MgbVpggg5gggjmDqJ5HtvZ5oVnQ6Xup5oc1P09DPaGp3mf7WdmvxSApZaqX3bnJhxQnh0POaSs6sGZQdPTPJjEMmr4dlJVlKspsysLEHkRIZI9KyxhiG7pyPAx6qVNjlKYMIYeoHFjr95zFISvosUKpuLEhhpbI+kuHtHiaeQqbw/eob46wWysp+RhRQmIXday1R4X0V/2tybrMHJCMlbVkh7YYhhY7g6hT9TIau0qj5lz6WHygOohUlSLEGxBkuHq2yOkFCY8WNPS/wCgpTw7vfduxHDUyi7G9jCWz6jr308SZ25rxyhba+zlxFL8TRFm/wCog5jU+cJVzUJJPXz8MzCPNZ2exG+u6fEvxHCY4GGdg4rcqqeBNj6xGrF9Vj5QdbNmuHlhKUljaukCieFbZG4EBbRxKr1MTaGNYXXj95iZ3F1i+Ra3neM4nVj9NKSsficRc3JlCtikGrW9f4inBIdXHx/mN9hTXRS3pMopHXH09FKrtC/g3ieBvb3cZzPXcd93C8mZrf2k5y21UjJFC+QzkTIdWNup1jWP7K8kCIBp7z9OUjrvYRz1c7KLn715So5zuTc/AeUwsmkqQ0xhikzgJiKVjbRY6dNY/FH0izADrGHnew5yDfspJ9JETeVo8hRJqlUDQ36xadNmF9BI6iWAJsOkemK3VtaENddAzbfZ6niV743XGQcDvDof1L0nme2uzdXDk76Hdvk65ofXh5GesPiSTeSrVyNwCpGYOY90Vxs6MWeeNU+18Hg70iOEarEG4nrG1ey1GqSyAUjqd0XQ/wCTh6WmXx3ZaogJNPfUfmTP/T4orizvhlhPTp/DAmGrhxZtfvOIyFYj4GxuhzHA/Iy7grb6b4yJsR04wUdcZuK+pA7Fgv3uIFj1lKb7aPZS2dJrg/lbX0Mym09lPTPeRl8xl6GBpoRThk7i/wBh+wcaEqpvaE7p6qciJtOz6ewxT4c5pUF15cx8J5tYiaXZm2/8SgznOmQC3Hd+sKJ5oynFr5Qna3ZX4euwA7rd5fXUQThqliDyIM23bvF0a602psrG5GWoB5zG1KBRisDXZX085Swrlv8Asek4Kpvojc1EsWgzYDH2Kg8ITETyeHkXGbX3Mz2hwR8Si9uHH0MzIxSXs+vJh9Z6DjluM4BxmBov4xrkDlr0jrs7vT52lTASNS/T7v8AeP3qXL5/zKmL2Uisd1mHxlVsCeFQ/wCqY7OcqughVxVNRkCPJSYHxlZSbhXPnkJKcC//ANn+qRnZ/wCp7+sxOUpy6oH1KxOWQHIfXnIrQk2FA0EiOHHE+6axfZltlQLHql5YFMff8x6oTppMOoeEVvZRZb/DjnFgD7R7hU8IiLOnS54vgsY7wr5SmfpFnTI0dEDa+6T0/DOnTDM6SDWdOmMtnn/a7/mT5CCTp/mizpN7Pbj/AKS/B6VT8I/pHyEr7c/5Z/KJOjvR5WL9f7nkz6nzi0p06RPYRfw3jX+ofOXNqf8Aynz+k6dCF7X4Zt9n+Bf6V+UtLOnRXs+fyfqZXxekye3fCv8AV9J06MtHT6fYEHjPlEE6dMerHQ2pIWnToAoa0gqRZ0xpDGlhZ06YER06dOgHP//Z"/>
        </Nav>
    )
}

export default Header
const Nav =styled.nav`
    width:100vw;
    height: 70px;
    background-color: #090b13;
    color:white;
    display:flex;
    align-items:center;
    padding:0 36px;


`
const Logo = styled.img`
width : 80px;


`

const NavMenu = styled.div`
display: flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display: flex;
    align-items:center;
    padding: 0 12px;
    cursor:pointer;
    
    img{
        height: 20px;

    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
       
        &:after{
            content:"";
            height:2px;
            background: white;
            position:absolute;
            left:0;
            right:0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.2,0.40,0.45,0.94) 0s;
            transform: scalex(0);  
         }

    }
    &:hover{
        span:after{
            transform: scalex(1);
            opacity: 1;
        }
    }
}
`
const UserImg= styled.img`
width: 40px;
height:40px;
border-radius:50%;

    
`